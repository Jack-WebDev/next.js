
const dotenv = require("dotenv")
dotenv.config()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

export async function register(username: string, password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return 'Registration successful';
}

export async function login(username: string, password: string): Promise<string | null> {
    const user = ''
    const password = ''
    if (!user) return null;
    
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return null;
    
    const token = jwt.sign({ username }, process.env.JWT_KEY);
    return token;
}