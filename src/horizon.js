import Horizon from '@horizon/client';

export const horizon = Horizon({ secure: false });
export const chat = horizon('messages');
