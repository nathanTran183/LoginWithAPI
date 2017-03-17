export class Account {
    public username: string;
    public password: string;
    public email: string;
    public created_at: string;
    public updated_at: string;
    public deleted_at: string;
    public connected: boolean = false;

    public constructor( data: any = {}) {
        this.username = data.firstname || '';
        this.password = data.lastname || '';
        this.email = data.email || '';
        this.created_at = data.created_at || Date.now();
        this.updated_at = data.updated_at || null;
        this.deleted_at = data.deleted_at || null;
        this.connected = data.connected || false;
    }
}
