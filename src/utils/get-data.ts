import TestData from "./model.json";
export function getFileData(props: Function){
    console.log(props)
    console.log(TestData)
    TestData.forEach((data) => {
        props((oldData) => [
          // Получения данных из файла
          ...oldData,
          {
            top: data.x,
            left: data.y - 3,
            textMark: data.name,
            amount: data.amount,
          },
        ]);
      });
}