import { Hono } from 'hono';
import { db } from '../db';

const userRouter = new Hono().get('/all', async (c) => {
  try {
    const users = await db.user.findMany();
    return c.json({
      success: true,
      data: users,
      message: 'Users fetched successfully.',
    });
  } catch (error) {
    return c.json({
      success: false,
      data: null,
      message: 'Failed to fetch users.',
    });
  }
});

export default userRouter;
