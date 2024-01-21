import { Module } from '@nestjs/common';
import { AxiosAdappter } from './adapters/axios.adapter';

@Module({
    providers: [
        AxiosAdappter
    ],
    exports: [
        AxiosAdappter
    ]
})
export class CommonModule {}
