from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description_short = models.CharField(max_length=255)
    description_full = models.TextField()
    image = models.ImageField(upload_to='projects/')
    tech_stack = models.CharField(max_length=200, help_text="Comma separated list, e.g. React, Tailwind, Django")
    features = models.TextField(help_text="Pipe separated list, e.g. Feature 1 | Feature 2")
    live_demo_url = models.URLField(blank=True, null=True)
    source_code_url = models.URLField(blank=True, null=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.title

class Certificate(models.Model):
    title = models.CharField(max_length=200)
    issuer = models.CharField(max_length=200)
    issue_date = models.DateField(blank=True, null=True)
    image = models.ImageField(upload_to='certificates/')
    credential_url = models.URLField(blank=True, null=True)
    order = models.IntegerField(default=0)

from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description_short = models.CharField(max_length=255)
    description_full = models.TextField()
    image = models.ImageField(upload_to='projects/')
    tech_stack = models.CharField(max_length=200, help_text="Comma separated list, e.g. React, Tailwind, Django")
    features = models.TextField(help_text="Pipe separated list, e.g. Feature 1 | Feature 2")
    live_demo_url = models.URLField(blank=True, null=True)
    source_code_url = models.URLField(blank=True, null=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.title

class Certificate(models.Model):
    title = models.CharField(max_length=200)
    issuer = models.CharField(max_length=200)
    issue_date = models.DateField(blank=True, null=True)
    image = models.ImageField(upload_to='certificates/')
    credential_url = models.URLField(blank=True, null=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.title

class Experience(models.Model):
    title = models.CharField(max_length=200)
    description_short = models.CharField(max_length=255)
    description_full = models.TextField()
    image = models.ImageField(upload_to='experiences/', blank=True, null=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.title
