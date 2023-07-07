export class CreateVisitorDto {
    readonly visitorType: string;
    readonly name: string;
    readonly nicno: string;
    readonly contectno: string;
    readonly email: string;
    readonly status: string;
    readonly requestedBy: string;
    readonly contactPerson: string;
    readonly createdBy: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt: Date;
}
