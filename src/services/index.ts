type ItemType = {
  name: string,
  age: number
}
export const getTestList: () => Promise<ItemType[]> = () => new Promise(resolve => {

  setTimeout(() => {
    resolve([
      {
        name: 'sjs',
        age: 31
      },
      {
        name: 'skp',
        age: 1
      }
    ])
  }, 2000);



})