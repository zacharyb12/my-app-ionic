


let data : string[] = [
    'Sample Item 1',
    'Sample Item 2',
    'Sample Item 3'
];

const serviceLocal = {

    getData : () : string[] => {
        return data;
    },

    addData : (item : string)  => {
        data.push(item);
    },
    setData : ( newData : string[] )  => {
        data = newData;
    }

}

export default serviceLocal;