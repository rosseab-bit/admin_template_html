class GetFiles {
  static async getImg(){
    const response = await fetch('http://192.168.0.161:3001/listimg');
    return await response.json();
  }
}
export default GetFiles;
