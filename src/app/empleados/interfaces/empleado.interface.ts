export interface Empleado {
    meta: Meta;
    data?: Datum | Datum[];
}

export interface Datum {
    id?:            number;
    nombre:        string;
    apellidoP:     string;
    apellidoM:     string;
    genero:        "Masculino"|"Femenino"|undefined;
    fecharegistro: Date;
    edad:          number | undefined;
}

export interface Meta {
    transactionID: string;
    status:        string;
    statusCode:    number;
    timestamp:     Date;
}

// {
//     id: 1,
//     nombre: "Julio Angel",
//     apellidoP: "Cejudo",
//     apellidoM: "Rodriguez",
//     genero: "masculino",
//     fecharegistro: this.fechaR,
//     edad: 23
// }