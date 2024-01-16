const getVariables = async () => {
  let data = await fetch('./conf.json');
  return data.json();
}
export {getVariables}
