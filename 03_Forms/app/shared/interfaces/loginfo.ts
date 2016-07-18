import LogLevel from "../enums/loglevel";

interface ILogInfo {
    time: Date;
    level: LogLevel;
    levelDisplay: string;
    message: any;
    isDebug: boolean;
    isInfo: boolean;
    isWarning: boolean;
    isError: boolean;
}

export default ILogInfo;
