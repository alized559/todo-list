from django.db import models

# Create your models here.
from django.db import models

# Create your models here.
class Todo(models.Model):
	id = models.BigAutoField(primary_key=True, null=False)
	label = models.CharField(max_length=255, null=False)
	description = models.TextField(max_length=100000, null=True)
	text_color = models.CharField(max_length=100, null=False)
	background_color = models.CharField(max_length=100, null=False)
	deadline = models.DateTimeField(null=True)

	def get_date(self):
		return self.deadline.date()

	def to_dict(self):
		return { 'id': self.id, 'label': self.label, 'description': self.description,
		 'text_color': self.text_color, 'background_color': self.background_color, 'deadline': self.deadline}

	class Meta():
		db_table = 'todos'

