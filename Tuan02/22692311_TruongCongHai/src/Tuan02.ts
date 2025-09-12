// bai 01
const delayedHelloWorld = new Promise<string>((resolve) => {
    return setTimeout(() => resolve("Hello world"), 2000)
})

delayedHelloWorld
    .then(value => console.log(value))
    .catch(err => console.error("Error while excuting: ", err));

// bai 02
const delayed10 = new Promise<number>((resolve) => {
    return setTimeout(() => resolve(10), 1)
})

delayed10
    .then(value => console.log("After 1 seconds: ", value))
    .catch(err => console.error("Error while excuting: ", err));

// bai 03
const delayedReject = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Something went wrong"))
    }, 1000)
})

delayedReject.then(value => console.log(value)).catch(err => console.log(err));

// bai 04
const getRandomNumber = (delay: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * 1000);
            if (num % 2 === 0) resolve(num)
            reject(num)
        }, delay)
    });
};

for (let i = 0; i < 10; i++) {
    getRandomNumber(100)
        .then(num => console.log("Random number:", num))
        .catch(err => console.error("Error:", err));
}

// bai 05
const simulateTask = (time: number): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
};

simulateTask(1000).then(value => console.log("Bai 05: ", value)).catch(err => console.log(err))

// bai 06
Promise.all([
    simulateTask(1000),
    simulateTask(1500),
    simulateTask(500)
]).then(results => {
    console.log("All tasks completed:", results);
});

// bai 07
Promise.race([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(500)
]).then(firstResult => {
    console.log("First completed task:", firstResult);
});

// bai 08
Promise.resolve(2)
    .then(num => num * num)        // 2^2 = 4
    .then(num => num * 2)          // 4 * 2 = 8
    .then(num => num + 5)          // 8 + 5 = 13
    .then(result => console.log("Final result:", result));

// bai 09
const delayedFilterNumber = (arr: number[]): Promise<number[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            const evenNumbers = arr.filter(num => {
                if (num % 2 === 0) return num
            });
            resolve(evenNumbers);
        }, 1000);
    });
};

delayedFilterNumber([1, 2, 3, 4, 5, 6])
    .then(even => console.log("Even numbers:", even));

// bai 10
const simulateTask2 = (time: number, failed: boolean): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (failed) reject(new Error("Some thing wrong"))
            resolve("Task done");
        }, time);
    });
};

simulateTask2(1000, true)
    .then(result => console.log("Result:", result))
    .catch(err => console.error("Error:", err))
    .finally(() => console.log("Done"));

simulateTask2(1000, false)
    .then(result => console.log("Result:", result))
    .catch(err => console.error("Error:", err))
    .finally(() => console.log("Done"));

// bai 11
const delayedHelloWorld2 = (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello world"), 2000);
    });
};

const bai11 = async () => {
    try {
        const value = await delayedHelloWorld2();
        console.log(value);
    } catch (err) {
        console.error("Error while executing:", err);
    }
};

bai11();


// bai 12
const simulateTask3 = (time: number): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
};

const bai12 = async () => {
    const result = await simulateTask3(2000);
    console.log(result);
};

bai12();

// bai 13
const bai13 = async () => {
    try {
        const result = await simulateTask3(2000);
        console.log(result);
    } catch (error) {
        console.error("Error occurred:", error);
    }
};

bai13();

// bai 14
const multiplyAfterDelay  = async (num: number): Promise<number> => {
    return new Promise(resolve => {
        setTimeout(() => resolve(num * 3), 1000);
    });
};

const bai14 = async () => {
    try {
        const value = await multiplyAfterDelay(3)
        console.log(value);
    } catch (err) {
        console.error(err);
    }
}

bai14()

// bai 15
const bai15s = async () => {
    const result1 = await multiplyAfterDelay(2); 
    const result2 = await multiplyAfterDelay(result1); 
    const result3 = await multiplyAfterDelay(result2);

    console.log("Sequential result:", result3);
};

bai15s();


// bai 16
const bai16 = async () => {
    const results = await Promise.all([
        multiplyAfterDelay(2),
        multiplyAfterDelay(4),
        multiplyAfterDelay(6)
    ]);

    console.log("Parallel results:", results);
};

bai16();

// bai 17
const promises = [2, 4, 6].map(num => multiplyAfterDelay(num));

const bai17 = async () => {
    for await (const result of promises) {
        console.log("Result from for-await:", result);
    }
};

bai17();

// bai 18
type User = {
    id: number;
    name: string;
};

const fetchUser = async (id: number): Promise<User> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id, name: `User ${id}` });
        }, 1000);
    });
};

const bai18 = async () => {
    try {
        const user = await fetchUser(10);
        console.log(user);
    } catch (err) {
        console.log((err as Error).message);
    }
}

bai18()

// bai 19
const fetchUsers = async (ids: number[]): Promise<User[]> => {
    const users = await Promise.all(ids.map(id => fetchUser(id)));
    return users;
};

const bai19 = async () => {
    try {
        const users = await fetchUsers([1, 2, 3])
        console.log(users);
    } catch (err) {
        console.log((err as Error).message);
    }
}

bai19()

// bai 20
const fetchUser2 = async (id: number, delayed: number = 1000): Promise<User> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id, name: `User ${id}` });
        }, delayed);
    });
};

const fetchUserWithTimeout = (id: number, delayed: number) => {
    const userPromise = fetchUser2(id, delayed);

    const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error("Request timed out")), 2000);
    });

    return Promise.race([userPromise, timeoutPromise]);
};

fetchUserWithTimeout(10, 1000)
    .then(console.log)
    .catch(err => console.error(err.message));

fetchUserWithTimeout(10, 3000)
    .then(console.log)
    .catch(err => console.error(err.message));

// bai 21
const fetchData = async (url: string) => {
    try {
        const result = await fetch(url)
        const data = await result.json()
        return data
    } catch (err) {
        console.log((err as Error).message);
    }
}

fetchData("https://jsonplaceholder.typicode.com/todos/1")

// bai 22
const bai22 = async () => {
    const results = await Promise.all([
        fetchData("https://jsonplaceholder.typicode.com/todos/1"),
        fetchData("https://jsonplaceholder.typicode.com/todos/2"),
        fetchData("https://jsonplaceholder.typicode.com/todos/3"),
    ])
    console.log(results);
}

bai22()

// bai 23
type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const fetchCompletedTodos = async (): Promise<Todo[]> => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todos: Todo[] = await res.json();
        const completed = todos.filter(todo => todo.completed);
        return completed
    } catch (err) {
        console.error("Error fetching todos:", (err as Error).message);
        return []
    } 
}

const bai23 = async () => {
    try {
        const res = await fetchCompletedTodos();
        console.log(res.slice(0, 5));
    } catch (err) {
        console.error("Error fetching todos:", (err as Error).message);
    }
}

bai23()

// bai 24
const bai24 = async (todo: Partial<Todo>) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        });

        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error((err as Error).message);
    }
};

bai24({
    title: "Random task",
    completed: false,
});

// bai 25
const bai25 = async () => {
    console.log("Starting download...");
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("File downloaded!");
};

bai25();

// bai 26
const bai26 = async () => {
    console.log("Waiting 5 seconds...");
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Done waiting!");
};

bai26();

// bai 27
const fetchWithRetry = async (url: string, retries: number): Promise<any> => {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            if (attempt === 1) throw new Error("failed")
            const res = await fetch(url);
            if (!res.ok) throw new Error(`Status: ${res.status}`);
            return await res.json();
        } catch (err) {
            console.warn(`Attempt ${attempt} failed: ${(err as Error).message}`);
            if (attempt === retries) throw err;
        }
    }
};
const bai27 = async () => {
    try {
        const res = await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3)
        console.log(res);
    } catch (err) {
        console.error((err as Error).message);
    }
}
bai27()

// bai 28
const asyncTask = (id: number): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Task ${id} done`), 1000);
    });
};

const batchProcess = async () => {
    const tasks = [1, 2, 3, 4, 5].map(id => asyncTask(id));
    const results = await Promise.all(tasks);
    console.log(results);
};

batchProcess();

// bai 29
const queueProcess = async () => {
    const tasks = [1,2,3,4,5]
    for (const id of tasks) {
        const result = await asyncTask(id)
        console.log(result);
    }
}

queueProcess()

// bai 30
const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/invalid", 
    "https://jsonplaceholder.typicode.com/todos/3",
];

const bai30 = async () => {
    const promises = urls.map(url => fetch(url).then(res => {
        if (!res.ok) throw new Error(`Failed: ${res.status}`);
        return res.json();
    }));

    const results = await Promise.allSettled(promises);

    results.forEach((result, index) => {
        console.log(index + 1 + ": " + result.status);
    });
};

bai30();