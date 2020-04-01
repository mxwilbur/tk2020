export class Acct {
  constructor(
    public id: number,
    public fname: string,
    public lname: string,
    public street: string,
    public city: string,
    public state: string,
    public zip: string,
    public shirttype: string,
    public shirtsize: string,
    public email: string,
    public phone: string,
    public phtype?: string,
    public contactpref?: string,
    public regyear?: string,    
    public shirtyear?: string,
    public medalyr?: string
  ) { }
}
