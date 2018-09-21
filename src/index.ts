import {MobilyWs} from "./MobilyWs";

export = function mobilyWs(apiKey: string, sender: string): MobilyWs {

    if (typeof apiKey !== 'string') {
        throw new Error("mobily.ws api key is required.")
    }

    if (typeof sender !== 'string') {
        throw new Error("You must provide sender name.")
    }

    return new MobilyWs(apiKey, sender);
}