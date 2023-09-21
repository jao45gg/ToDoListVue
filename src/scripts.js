const app = {
    data() {
        return {
            tasks: [],
            task: "",
        };
    },
    methods: {
        addTask() {
            if (this.task !== "") this.tasks.push({ task: this.task, active: false });

            this.task = "";
        },
        removeAll() {
            this.tasks = [];
        },
    },
};

Vue.createApp(app).mount("#app");
