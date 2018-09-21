import {MobilyWs} from "./MobilyWs";

export function mobilyWs(username: string, password: number): MobilyWs {
    return new MobilyWs(username, password);
}