type idType = string | number | undefined;

type TodosItem = {
    id?: idType;
    title?: string;
    body?: string;
    completed?: boolean;
}

export type { idType, TodosItem }