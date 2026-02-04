const { execSync } = require('child_process');
const os = require('os');

console.log('Остановка серверов...');

const ports = [3000, 5173];
const platform = os.platform();

function killPort(port) {
  try {
    if (platform === 'win32') {
      // Windows
      execSync(`netstat -ano | findstr :${port}`, { stdio: 'pipe' });
      execSync(`for /f "tokens=5" %a in ('netstat -ano ^| findstr :${port}') do taskkill /F /PID %a`, { stdio: 'pipe' });
    } else {
      // Linux/Mac
      execSync(`lsof -ti:${port} | xargs kill -9 2>/dev/null || true`, { stdio: 'pipe' });
    }
    console.log(`Порт ${port} освобожден`);
  } catch (error) {
    // Игнорируем ошибки, если процесс не найден
    console.log(`Порт ${port} уже свободен`);
  }
}

try {
  ports.forEach(killPort);
  console.log('Серверы остановлены');
} catch (error) {
  console.error('Ошибка при остановке серверов:', error.message);
  process.exit(1);
}

