import mysql from 'mysql'

class DB {

    private static _instance : DB;

    connection : mysql.Connection;
    connected: boolean = false;

    constructor(){
        this.connection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'develop',
            password: 'password',
            database: 'loja'
        });

        this.connect();
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    public static query(query : string, callback: Function){
        this.instance.connection.query(query, (err: Error, results: Object[], fields:[]) => {
            if(err){
                callback(err);

            }else if(results.length === 0){
                callback('Sem registros na tabela');

            }else{
                callback(null, results)
            }         
        });
    }

    private connect(){
        this.connection.connect( (err: mysql.MysqlError) => {
            if(err){
                console.log(err.message);
                return;
            }

            this.connected = true;
            console.log("Conectado ao MySQL!");
        });
    }

}

export default DB;