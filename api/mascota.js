import { api } from '.';

export const getMascotas = async (primario, foraneo) => {
    const response = await api({
        method: 'GET',
        url: `/users?primario=${primario}&foraneo=${foraneo}`,
    });

    return response;
}