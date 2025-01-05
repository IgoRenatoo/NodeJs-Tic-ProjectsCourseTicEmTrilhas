export type UserData = {
  name: string
  password: string
}

export type SwaggerType = {
  definition: {
    openapi: string;
    info: {
        title: string;
        version: string;
        description: string;
    };
    servers: {
        url: string;
    }[];
};
apis: string[];
}
