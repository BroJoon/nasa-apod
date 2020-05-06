import axios from 'axios';

export function getAPOD(date = '') {
    return axios.get
    (`https://api.nasa.gov/planetary/apod?api_key=X7TtNWFhEVkPxCNfdFveA4Y35U2gS6Qk4wNtDBnD&date=${date}`);
}
