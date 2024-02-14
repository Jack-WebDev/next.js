import { NextApiRequest, NextApiResponse } from 'next';
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const pool = '';

export default async function authUser(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  try {
    const query = 'SELECT * FROM Users WHERE Email = ?';
    const rows = "";

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user: any = rows[0]; // Adjust the type according to your user model

    const isPasswordValid = '';

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.UserID, role: user.Role },
      process.env.JWT_KEY as string,
      { expiresIn: '1h' }
    );

    res.setHeader('Set-Cookie', `jwt=${token}; HttpOnly; Max-Age=${1 * 60 * 60 * 1000}; Path=/`);

    res.json({ success: true, role: user.Role, name: user.Name });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
