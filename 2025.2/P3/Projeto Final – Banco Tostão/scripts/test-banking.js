
const BASE_URL = "http://localhost:3000";

async function request(endpoint, method, body = null, token = null) {
    const headers = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const options = {
        method,
        headers,
    };

    if (body) options.body = JSON.stringify(body);

    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    const data = await response.json();

    return { status: response.status, data };
}

async function runTests() {
    console.log("Starting Tests...");

    const suffix = Math.floor(Math.random() * 10000);
    const user1 = { login: `userA_${suffix}`, senha: "password123" };
    const user2 = { login: `userB_${suffix}`, senha: "password123" };

    // 1. Signup
    console.log(`\nCreating User 1: ${user1.login}`);
    const res1 = await request("/usuarios", "POST", user1);
    if (res1.status !== 200) console.error("Create User 1 failed:", JSON.stringify(res1.data, null, 2));
    else console.log("User 1 Created");

    console.log(`Creating User 2: ${user2.login}`);
    const res2 = await request("/usuarios", "POST", user2);
    if (res2.status !== 200) console.error("Create User 2 failed:", res2);
    else console.log("User 2 Created");

    // 2. Login
    console.log("\nLogging in User 1...");
    const login1 = await request("/login", "POST", user1);
    const token1 = login1.data.token;
    if (!token1) console.error("Login User 1 failed:", login1);
    else console.log("User 1 Logged in");

    console.log("Logging in User 2...");
    const login2 = await request("/login", "POST", user2);
    const token2 = login2.data.token;
    if (!token2) console.error("Login User 2 failed:", login2);
    else console.log("User 2 Logged in");

    if (!token1 || !token2) return;

    // 3. Deposit
    console.log("\nUser 1 Depositing 1000...");
    const deposit = await request("/transacao/depositar", "POST", { valor: 1000, tipo: "DEPOSITO" }, token1);
    console.log("Deposit Result:", deposit.data);

    // 4. Transfer
    console.log("\nUser 1 Transferring 300 to User 2...");
    const transfer = await request("/transacao/transferir", "POST", {
        valor: 300,
        tipo: "TRANSFERENCIA",
        destinatarioLogin: user2.login
    }, token1);
    console.log("Transfer Result:", transfer.data);

    // 5. Withdraw
    console.log("\nUser 1 Withdrawing 100...");
    const withdraw = await request("/transacao/sacar", "POST", { valor: 100, tipo: "SAQUE" }, token1);
    console.log("Withdraw Result:", withdraw.data);

    // 6. Statement User 1
    console.log("\nChecking Statement User 1...");
    const extrato1 = await request("/transacao/extrato", "GET", null, token1);
    console.table(extrato1.data.map(t => ({ id: t.id, tipo: t.tipo, valor: t.valor, data: t.data })));

    // 7. Statement User 2
    console.log("\nChecking Statement User 2...");
    const extrato2 = await request("/transacao/extrato", "GET", null, token2);
    console.table(extrato2.data.map(t => ({ id: t.id, tipo: t.tipo, valor: t.valor, data: t.data })));

    // 8. Check Final Balances via Saldo endpoint if exists
    // We assume /saldos/:userId exists from previous context but we need userId.
    // The login response didn't return User ID explicitly in this script, but creation did.
    // res1.data.id should exist.

    const userId1 = res1.data.id;
    if (userId1) {
        const saldoCheck = await request(`/saldos/${userId1}`, "GET", null, token1);
        console.log(`\nUser 1 Final Balance (via /saldos):`, saldoCheck.data);
    }

}

runTests().catch(console.error);
