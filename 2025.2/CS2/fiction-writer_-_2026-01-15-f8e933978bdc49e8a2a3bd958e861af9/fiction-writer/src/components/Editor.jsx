import { useState } from 'react';
import PropTypes from 'prop-types';

import './Editor.css';

export default function Editor({ title, setTitle, description, setDescription, cancelStory, saveStory, deleteStory }) {
    const [hero, setHero] = useState('menino');
    const heroes = ['menino', 'menina', 'homem', 'mulher',
        'idoso', 'idosa', 'animal', 'objeto', 'lugar'];

    const [conflict, setConflict] = useState('indivíduo contra indivíduo');
    const conflicts = ['indivíduo contra indivíduo', 'indivíduo contra natureza', 'indivíduo contra si mesmo', 'indivíduo contra destino/sorte', 'indivíduo contra máquina', 'indivíduo contra sistema', 'indivíduo contra passado'];

    const [genre, setGenre] = useState('terror');
    const genres = ['terror', 'suspense', 'drama', 'comédia', 'romance',
        'aventura', 'policial', 'fantasia'];

    const [ambient, setAmbient] = useState('escola');
    const ambients = ['escola', 'empresa', 'cidade pequena', 'cidade grande',
        'comunidade rural', 'presídio', 'hospital', 'floresta'];

    const [time, setTime] = useState('contemporâneo');
    const times = ['pré-histórico', 'medieval', 'contemporâneo',
        'futurístico', 'pós-apocalíptico'];

    const [audience, setAudience] = useState('jovem');
    const audiences = ['infantil', 'jovem', 'adulto'];

    const [additional, setAdditional] = useState('');

    function randomFromArray(array) {
        return array[Math.floor(Math.random() * (array.length))];
    }

    function randomize() {
        setHero(randomFromArray(heroes));
        setConflict(randomFromArray(conflicts));
        setGenre(randomFromArray(genres));
        setAmbient(randomFromArray(ambients));
        setTime(randomFromArray(times));
        setAudience(randomFromArray(audiences));
        setAdditional('');
    }

    function createStory(e) {
        console.log('Aqui chamaremos a API da OpenAI!');
    }

    function downloadStory() {
        let filename = title.trim();
        let content = description.trim();
        if (!filename || !content) {
            alert('Sua história precisa ter um título e um conteúdo.');
            return;
        }
        const link = document.createElement("a");
        const file = new Blob([filename + '\n\n' + content], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = filename + '.txt';
        link.click();
        URL.revokeObjectURL(link.href);
    }

    return (
        <div className="editor">
            Escreva uma história com um(a) protagonista
            <select value={hero} onChange={(e) => setHero(e.target.value)}>
                {heroes.map((value) => (
                    <option key={value} value={value}>{value}</option>
                ))}
            </select>

            com um conflito do tipo
            <select value={conflict} onChange={(e) => setConflict(e.target.value)}>
                {conflicts.map((value) => (
                    <option key={value} value={value}>{value}</option>
                ))}
            </select>

            do gênero
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                {genres.map((value) => (
                    <option key={value} value={value}>{value}</option>
                ))}
            </select>

            ambientada em um(a)
            <select value={ambient} onChange={(e) => setAmbient(e.target.value)}>
                {ambients.map((value) => (
                    <option key={value} value={value}>{value}</option>
                ))}
            </select>

            no tempo
            <select value={time} onChange={(e) => setTime(e.target.value)}>
                {times.map((value) => (
                    <option key={value} value={value}>{value}</option>
                ))}
            </select>

            para o público
            <select value={audience} onChange={(e) => setAudience(e.target.value)}>
                {audiences.map((value) => (
                    <option key={value} value={value}>{value}</option>
                ))}
            </select>


            .<br /> Informações adicionais:
            <input type="text" value={additional} onChange={(e) =>
                setAdditional(e.target.value)} />

            <div>
                <button onClick={randomize}>Randomize!</button>
                <button onClick={createStory}>Criar!</button>
            </div>

            <p>{`Escreva uma história com um(a) protagonista "${hero}" com um conflito do tipo "${conflict}" do gênero "${genre}" ambientada em um(a) "${ambient}" no tempo "${time}" para o público "${audience}". ${additional}.`}</p>

            <input className="title" value={title}
                onChange={(e) => setTitle(e.target.value)} />

            <textarea className="description"
                value={description} onChange={(e) =>
                    setDescription(e.target.value)}></textarea>

            <button onClick={cancelStory}>Cancelar</button>
            <button onClick={downloadStory}>Baixar</button>
            <button onClick={saveStory}>Salvar</button>
            <button onClick={deleteStory} id="btnExcluir"
                    style={{visibility:'hidden'}}>Excluir</button>
        </div>
    );
}

Editor.propTypes = {
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    setDescription: PropTypes.func.isRequired,
    cancelStory: PropTypes.func.isRequired,
    saveStory: PropTypes.func.isRequired,
    deleteStory: PropTypes.func.isRequired,
};