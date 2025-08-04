import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';
import { webconfig_json } from './common';
import { connectToDatabase } from './db';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/core',routes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
    message: webconfig_json.NODE_ENV === 'development' ? err.message : undefined
  });
});


async function startService() {
  try {
    app.listen(webconfig_json.PORT, webconfig_json.host, () => {
      console.log(`Database service running at http://${webconfig_json.host}:${webconfig_json.PORT}/core`);
    });
    const connected = await connectToDatabase();
    if (!connected) {
      console.error('Failed to connect to database. Exiting...');
      process.exit(1);
    };
  } catch (error) {
    console.error('Initialization error:', error);
    process.exit(1);
  };
};

startService();
