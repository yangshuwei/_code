const STATUS = { PENDING: 'PENDING', FULFILED: 'FULFILED', REJECTED: 'REJECTED' }
class Promise {
    constructor(executor) {
        this.value = "";
        this.reason = "";
        this.status = STATUS.PENDING;
        const reslove = (val) => {
            if (this.status == STATUS.PENDING) {
                this.status = STATUS.FULFILED
                this.value = val;
            }

        }
        const reject = (reason) => {
            if (this.status == STATUS.PENDING) {
                this.status = STATUS.REJECTED
                this.reason = reason;
            }
        }


        executor(reslove, reject)

    }
    then() {

    }
}




module.exports = Promise;