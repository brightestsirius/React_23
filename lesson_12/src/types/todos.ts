type id = string | number | undefined;

type TodosItem = {
    id?: id;
    title?: string;
    body?: string;
    completed?: boolean;
}

export type { id, TodosItem };