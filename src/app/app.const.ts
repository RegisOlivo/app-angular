export const API = {
    //default: 'http://agdatabox.md.utfpr.edu.br:8080/quadro-api/api/'
      default: 'http://localhost:3000/'
}

export function getDefaultUrl(resource: string): string {
    return API.default + resource;
}
