from db import db
from sqlalchemy import Sequence, Column, DateTime, Text, BigInteger, Integer

class Todo(db.Model):
	__tablename__ = 'todos'

	id = Column(BigInteger().with_variant(Integer, 'sqlite'), primary_key=True)
	label = Column(Text, nullable=False)
	description = Column(Text, nullable=False)
	text_color = Column(Text, nullable=False)
	background_color = Column(Text, nullable=False)
	deadline = Column(DateTime, nullable=True)

	def to_dict(self):
		return { 'id': self.id, 'label': self.label, 'description': self.description,
			'text_color': self.text_color, 'background_color': self.background_color, 'deadline': self.deadline}
