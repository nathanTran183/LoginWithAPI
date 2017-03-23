export class Account {
    public username: string;
    public password: string;
    public email: string;
    public role: boolean;    
    public created_at: Date;
    public updated_at: Date;
    public deleted_at: Date;
    public connected: boolean = false;

    public constructor( data: any = {}) {
        this.username = data.username || 'abc';
        this.password = data.password || '';
        this.email = data.email || '';
        this.role = data.role || false;
        this.created_at = data.created_at || Date.now();
        this.updated_at = data.updated_at || null;
        this.deleted_at = data.deleted_at || null;
        this.connected = data.connected || false;
    }
}
