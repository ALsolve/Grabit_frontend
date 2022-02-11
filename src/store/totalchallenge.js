import { writable } from 'svelte/store';

const challenge = [
    {
        title: '챌린지1 입니다.',
        description: '내 챌린지입니다',
        leader: 'llJTOll',
        count: 3
    },
    {
        title: '이 챌린지는 소개글이 없습니다',
        description: '',
        leader: 'user1',
        count: 2
    },
    {
        title: '챌린지3',
        description: '남의 챌린지입니다',
        leader: 'user2',
        count: 1
    }, //임시입니다. DB에서 목록 받아오기
];

export const challengelist = writable(challenge);
