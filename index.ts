import axios from './axios-instance';
import { exit } from 'process';

const project = process.argv[2];

if (!project) {
  console.error('missing project name');
  exit(1);
}

async function getVariables(project: string) {

  try {
    const projEndpoint = `/projects/${project}`;
    const octoVars = await axios.get(projEndpoint)
      .then(res => res.data.VariableSetId);

    const varsEndpoint = `/variables/${octoVars}`;
    const res = await axios.get(varsEndpoint);
    return res.data.Variables;

  } catch (e) {
    handleError(e);
  }
}

getVariables(project)
  .then(res => console.log(JSON.stringify(res, null, 2)))
  .catch(console.error);


function handleError(e: Error) {
  console.error(e);
  exit(1);
}
