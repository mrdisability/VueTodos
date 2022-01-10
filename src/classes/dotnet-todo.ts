import {Entity} from "@/interfaces/entity";

export class DotnetTodo implements Entity {
    id: number;
    todo: string;
    isComplete: boolean;

    constructor(id = 0, todo = '', isComplete = false) {
        this.id = id;
        this.todo = todo;
        this.isComplete = isComplete;
    }
}