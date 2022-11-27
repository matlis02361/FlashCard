import React, { useState, useMemo } from 'react';
import Pagination from './pagination';
import data from './data/translations.json';
import Card from 'react-bootstrap/Card';
import './App.scss';

let PageSize = 20;

export default function App() {
	const [currentPage, setCurrentPage] = useState(1);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return data.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);

	return (
		<>
			<h1>Excel Read/Write Example</h1>
			<p>Welcome to this site.</p>
			<h2>
				There are
				{currentTableData.length * currentPage + 1 - currentTableData.length}
				bis {currentTableData.length * currentPage} von {data.length}
				translations:
			</h2>

			<div className="container-fluid">
				
				<div className="content">
					{currentTableData.map((item, i) => {
						return (
							<div key={i}>
								<Card
									style={{
										height: '150px',
										width: '300px',
										backgroundColor: 'lightgrey',
									}}
								>
									<Card.Body>
										<Card.Title>
											{item.fromLanguage}
										</Card.Title>
										<Card.Text>{item.fromPhrase}</Card.Text>
									</Card.Body>
								</Card>

								<Card
									style={{
										height: '150px',
										width: '300px',
										backgroundColor: 'lightblue',
									}}
								>
									<Card.Body>
										<Card.Title>
											{item.toLanguage}
										</Card.Title>
										<Card.Text>{item.toPhrase}</Card.Text>
									</Card.Body>
								</Card>
							</div>
						);
					})}
				</div>
			</div>
			<div className="d-flex justify-content-center mt-5">
				<Pagination
					className="pagination-bar"
					currentPage={currentPage}
					totalCount={data.length}
					pageSize={PageSize}
					onPageChange={(page) => setCurrentPage(page)}
				/>
			</div>
		</>
	);
}
