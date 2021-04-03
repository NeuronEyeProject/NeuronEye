const { exec } = require('child_process');
import { series } from 'async';

series([
 () => exec('npm start api'),
 () => exec('npm start logs'),
 () => exec('npm start webserver')
]); 