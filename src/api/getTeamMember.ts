import { BASE_URL } from '@/lib/ENV';
import axios from 'axios'

const getTeamMember = async() => {
    try {
        const teamTotal = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
        const res = await fetch(`${BASE_URL}/api/?results=${teamTotal}`)
        return res.json();
    } catch (error) {
        return [];
    }
}

export default getTeamMember