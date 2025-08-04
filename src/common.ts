
import fs from 'fs';


const webconfig: string = fs.readFileSync("./webconfig.json", "utf-8");
const webconfig_details = JSON.parse(webconfig);
export const webconfig_json = {
    mysql_pool_config: webconfig_details.mysqlPoolConfig,
    PORT: webconfig_details.PORT,
    host: webconfig_details.host,
    NODE_ENV: webconfig_details.NODE_ENV
}

export function formatToReadableDate(isoString: string): string {
    const date = new Date(isoString);

    const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC', // Adjust or remove based on requirement
    };

    const formatted = new Intl.DateTimeFormat('en-US', options).format(date);

    // Convert to format: Wed, August 27, 2025
    const [weekday, month, day, year] = formatted.replace(',', '').split(' ');
    return `${weekday}, ${month} ${day}, ${year}`;
}

export function toDateOnly(isoString: string): string {
    const date = new Date(isoString);
    return date.toISOString().split('T')[0];
}


export const APIResponse = (sts: number, msg: string) => {
    return {
        sts,
        msg
    }
}

export const APIDataResponse = (sts: number, msg: string, data: any) => {
    return {
        sts,
        msg,
        data
    }
};
