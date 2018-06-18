export interface Profile {
        userId: number;
        active: boolean;
        img: string;
        firstname: string;
        lastname: string;
        job: string;
        birthdate: Date;
        email: string;
        free: boolean;
        address: string;
        range: Array<string>;
        car: string;
        social: Array<{
                id: number;
                name: string;
                image: string;
                link: string;
        }>;
        skills: Array<{
                title: string;
                tools: Array<{
                        id: number;
                        title: string;
                        description: string;
                        percent: number;
                }>;
        }>;
        experiences: Array<{
                company: string;
                title: string;
                startdate: Date;
                enddate: Date;
                description: string;
        }>;
        educations: Array<{
                name: string;
                school: string;
                startdate: Date;
                enddate: Date;
                description: string;
        }>;
        portfolio: Array<{
                title: string;
                description: string;
                images: Array<string>;
        }>;
        hobbies: Array<{
                title: string;
                description: string;
                image: string;
        }>;
}