import * as axios from 'axios';
const instance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3020/"
});

export const API = {
    getPlayers() {
        return instance.get('players')
    },
    addPlayer(name) {
        return instance.post('players', {fullName})
    },
    updatePlayer(id, name) {
        return instance.put('players', {id, fullName})
    },
    deletePlayer(id) {
        return instance.delete('player/' + id)
    },
    getGames() {
        return instance.get('games')
    },
    addGame(player1Id, player2Id) {
        return instance.post('games', {player1Id, player2Id})
    },
    updateGameScore(id, player1WinsCount, player2WinsCount) {
        return instance.put('games', {id, player1WinsCount, player2WinsCount})
    },
    startGame(id) {
        return instance.put('games/start')
    },
    stopGame(id) {
        return instance.put('games/stop')
    }

};