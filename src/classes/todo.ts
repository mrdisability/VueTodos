import {Entity} from "@/interfaces/entity";

export class Todo implements Entity {
    id: number;
    todo: string;
    completed: boolean;

    constructor(id = 0, todo = '', completed = false) {
        this.id = id;
        this.todo = todo;
        this.completed = completed;
    }
}