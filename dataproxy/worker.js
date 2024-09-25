
// worker.js

function generateDummyData(size) {
    const data = [];
    for (let i = 0; i < size; i++) {
        data.push({ id: i, title: `Document ${i}`, content: `This is document ${i}` });
    }
    return data;
}

self.onmessage = function(event) {
    const { query, processTime, docsSize } = event.data;

    console.log('IN WORKER')

    // Simulate processing time
    setTimeout(() => {
        const data = generateDummyData(docsSize)

        // Send data back to DataProxy
        console.log('data in worker : ', data)
        self.postMessage(data);
    }, processTime);
};
