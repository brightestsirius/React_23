type id = number | string | undefined;

type TodosItem = {
    userId?: id;
    id?: id,
    title?: string,
    completed?: boolean
}

export type { id, TodosItem }