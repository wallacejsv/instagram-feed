const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: "Iniciando com React",
            lessons: [
                { id: 1, title: "Primeira aula" },
                { id: 2, title: "Segunda aula" }
            ]
        },
        {
            id: 2,
            title: "Aprendendo Redux",
            lessons: [
                { id: 1, title: "Terceira aula" },
                { id: 2, title: "Quarta aula" }
            ]
        }
    ]
};

export default function course(state = INITIAL_STATE, action) {
    if(action.type == 'TOGGLE_LESSON') {
        return { ...state, 
                activeLesson: action.lesson, 
                activeModule: action.module 
            };
    }
    return state;
}