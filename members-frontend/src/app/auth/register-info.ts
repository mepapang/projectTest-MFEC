export class RegisterInfo {
    nickname: string;
    email: string;
    username: string;
    password: string;

    constructor(nickname: string, email: string, username: string, password: string) {
        this.nickname = nickname;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}