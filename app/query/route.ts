import postgres from 'postgres';

<<<<<<< HEAD
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
=======
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require', prepare: false });
>>>>>>> c3ece0a (Completed until step 10)

async function listInvoices() {
	const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

	return data;
}

export async function GET() {
  try {
  	return Response.json(await listInvoices());
  } catch (error) {
  	return Response.json({ error }, { status: 500 });
  }
}
