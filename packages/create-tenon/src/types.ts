type Colors = (str: string | number) => string

type Category = {
    name: string
    description: string
    color: Colors
}
