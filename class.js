class PersianDate extends Date {
    constructor(...args) {
        super(...args);
    }

    getParts = () => this.toLocaleDateString('fa-IR-u-nu-latn').split("/")
    getDay = () => super.getDay() === 6 ? 0 : super.getDay() + 1
    getDate = () => this.getParts()[2];
    getMonth = () => this.getParts()[1] - 1;
    getYear = () => this.getParts()[0];
    getMonthName = () => this.toLocaleDateString("fa-IR", { month: 'long' });
    getDayName = () => this.toLocaleDateString("fa-IR", { weekday: 'long' });
}
